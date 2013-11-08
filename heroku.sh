./node_modules/grunt-cli/bin/grunt build:dist

git add src/client/css/i.css
git commit -m "Updated production CSS"
git push origin heroku
git push heroku heroku:master