source "https://rubygems.org"

# The site is built and served by GitHub Pages, so the github-pages gem pins the
# whole toolchain (Jekyll, Kramdown, Sass, and the supported plugins) to exactly
# what GitHub runs. Do not add a bare `gem "jekyll"` -- it will fight that pin
# and let local builds diverge from production. Always build with `bundle exec`.
gem "github-pages", group: :jekyll_plugins

gem "minima", "~> 2.5"

# NOTE: GitHub Pages ignores this Gemfile entirely -- it reads the `plugins:`
# list in _config.yml. The site's actual plugins (jekyll-seo-tag,
# jekyll-sitemap) are declared there and arrive here transitively via
# github-pages, so they are not repeated below; adding them would require
# re-running `bundle install` to refresh Gemfile.lock for no build-time gain.
#
# jekyll-feed is no longer enabled in _config.yml (there is no blog). It is left
# installed here only so Gemfile.lock stays valid without a re-resolve.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

gem "webrick"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
