#!/usr/bin/env python
#
import tornado.httpserver
import tornado.auth
import tornado.ioloop
import tornado.web
import os
import config

class WebHandler(tornado.web.RequestHandler):
  def get_current_user(self):
    return self.get_secure_cookie("uid")

  def get_error_html(self, status_code, **kwargs):
    return "<html><title>Error!</title><style>.box {margin:16px;padding:8px;border:1px solid black;font:14pt Helvetica,arial} "\
            ".small {text-align:right;color:#888;font:italic 8pt Helvetica;}</style>" \
           "<body><div class='box'>We're sorry, something went wrong!<br><br>Perhaps "\
           "you should <a href='/'>return to the front page.</a><br><br><div class='small'>%s %s</div></div>" % (
          status_code, kwargs['exception'])

  def render_platform(self, file, templates=False, **kwargs):
    target_file = file

    if  "User-Agent" in self.request.headers:
      UA = self.request.headers["User-Agent"]
      if UA.find("iPhone") >= 0:
        target_file = target_file + "_iphone"
    if self.get_argument("cloak", None):
      target_file = file + "_" + self.get_argument("cloak", None)

    tmpl = None
    if templates:
      f = open(target_file + ".tmpl", "r")
      tmpl = f.read()
      f.close() # cache this

    self.render(target_file + ".html", templates=tmpl, **kwargs)

            
# General, and user administration, handlers
class MainHandler(WebHandler):
  def get(self):
    self.set_header("X-XRDS-Location", "%s/xrds" % config.DOMAIN)
    self.render_platform("index", errorMessage=None, templates=True)

class XRDSHandler(WebHandler):
  def get(self):
    self.set_header("Content-Type", "application/xrds+xml")
    self.write("""<?xml version="1.0" encoding="UTF-8"?>"""\
      """<xrds:XRDS xmlns:xrds="xri://$xrds" xmlns:openid="http://openid.net/xmlns/1.0" xmlns="xri://$xrd*($v*2.0)">"""\
      """<XRD><Service priority="1"><Type>https://specs.openid.net/auth/2.0/return_to</Type>"""\
      """<URI>%s/login</URI>"""\
      """</Service></XRD></xrds:XRDS>""" % config.DOMAIN)

class WebAppManifestHandler(WebHandler):
  def get(self):
    self.set_header("Content-Type", "application/x-web-app-manifest+json")
    self.render("aboutme.webapp")

class ServiceHandler(WebHandler):
  def get(self):
    self.render("aboutme_svc.html")


##################################################################
# Main Application Setup
##################################################################

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "static"),
    "cookie_secret": config.cookie_secret,
    "login_url": "/login",
    "debug":True,
    "xheaders":True,
#    "xsrf_cookies": True,
}

application = tornado.web.Application([
    (r"/aboutme.webapp", WebAppManifestHandler),
    (r"/service", ServiceHandler),
    (r"/xrds", XRDSHandler),
    (r"/", MainHandler),
 
	], **settings)


def run():
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8400)
    
    print "Starting server on 8400"
    tornado.ioloop.IOLoop.instance().start()
		
import logging
import sys
if __name__ == '__main__':
	if '-test' in sys.argv:
		import doctest
		doctest.testmod()
	else:
		logging.basicConfig(level = logging.DEBUG)
		run()
	
	