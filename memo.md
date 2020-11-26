
## 九州夜景

gdalでGeoTIFFを切り抜けるらしい。
https://qiita.com/yuskesuzki@github/items/58ff44af4967b345ec20


https://fukuno.jig.jp/app/printmap/latlngmap.html#7/30.921076/132.264404/&base=std&ls=std&disp=1&vs=c1j0l0u0f1
で切り抜きたい矩形頂点の経緯度を確認。

こんな感じ。

左上
34.043556,129.144287

右下
30.921076,132.264404

gdal_translate -projwin 129.144287 34.043556 132.264404 30.921076 BlackMarble_2016_D1_geo.tif kyusyu.tif
