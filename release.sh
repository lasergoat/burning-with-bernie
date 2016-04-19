
rm -rf dist/

mkdir -p dist/image

cp -r image/ dist/image

npm run build

firebase deploy
