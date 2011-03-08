DOMAIN = "https://aboutme.mozillalabs.com"

# If aboutme.cfg exists, we will get cookie_secret from it;
# otherwise we will use a trivial secret.  Never run in
# production with the trivial secret.
try:
  f = open("../aboutme.cfg/cookie_secret")
  cookie_secret = f.read()
  f.close()
except:
  cookie_secret = "this_is_not_a_real_secret_you_should_replace_it"
