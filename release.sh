
rm -rf dist/

mkdir -p dist/images

cp -r src/images/ dist/images

npm run build

firebase deploy
