#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn 

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --global user.email "2443419001@qq.com"
git config --global user.name "Zhujingle"

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:ZhuJingLe/ZhuJingLe.github.io.git gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -