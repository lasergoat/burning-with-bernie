
rm -rf dist/

mkdir -p dist/image

cp -r image/* dist/image/

firebase deploy
