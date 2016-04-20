
rm -rf dist/

mkdir -p dist/src/images

cp -r src/images/ dist/src/images

npm run build

firebase deploy
