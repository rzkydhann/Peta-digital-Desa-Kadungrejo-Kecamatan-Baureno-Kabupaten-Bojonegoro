var wms_layers = [];

        var lyr_WorldImageryClarityBeta_0 = new ol.layer.Tile({
            'title': 'World Imagery (Clarity) Beta',
            'opacity': 1.000000,
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

var format_ADMINISTRASI_AR_DESAKEL_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_DESAKEL_1 = format_ADMINISTRASI_AR_DESAKEL_1.readFeatures(json_ADMINISTRASI_AR_DESAKEL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_DESAKEL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_DESAKEL_1.addFeatures(features_ADMINISTRASI_AR_DESAKEL_1);
var lyr_ADMINISTRASI_AR_DESAKEL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_DESAKEL_1, 
                style: style_ADMINISTRASI_AR_DESAKEL_1,
                popuplayertitle: 'ADMINISTRASI_AR_DESAKEL',
                interactive: true,
    title: 'ADMINISTRASI_AR_DESAKEL<br />\
    <img src="styles/legend/ADMINISTRASI_AR_DESAKEL_1_0.png" /> <br />' });

var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });

var format_SARANAIBADAH_PT_25K_3 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_3 = format_SARANAIBADAH_PT_25K_3.readFeatures(json_SARANAIBADAH_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_3.addFeatures(features_SARANAIBADAH_PT_25K_3);
var lyr_SARANAIBADAH_PT_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_3, 
                style: style_SARANAIBADAH_PT_25K_3,
                popuplayertitle: 'SARANAIBADAH_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_3.png" /> SARANAIBADAH_PT_25K'
            });

var format_RUMAHSAKIT_PT_25K_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_4 = format_RUMAHSAKIT_PT_25K_4.readFeatures(json_RUMAHSAKIT_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_4.addFeatures(features_RUMAHSAKIT_PT_25K_4);
var lyr_RUMAHSAKIT_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_25K_4, 
                style: style_RUMAHSAKIT_PT_25K_4,
                popuplayertitle: 'RUMAHSAKIT_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_4.png" /> RUMAHSAKIT_PT_25K'
            });

var format_PENDIDIKAN_PT_25K_5 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_5 = format_PENDIDIKAN_PT_25K_5.readFeatures(json_PENDIDIKAN_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_5.addFeatures(features_PENDIDIKAN_PT_25K_5);
var lyr_PENDIDIKAN_PT_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_5, 
                style: style_PENDIDIKAN_PT_25K_5,
                popuplayertitle: 'PENDIDIKAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_5.png" /> PENDIDIKAN_PT_25K'
            });

var format_PEMERINTAHAN_PT_25K_6 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_6 = format_PEMERINTAHAN_PT_25K_6.readFeatures(json_PEMERINTAHAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_6.addFeatures(features_PEMERINTAHAN_PT_25K_6);
var lyr_PEMERINTAHAN_PT_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_6, 
                style: style_PEMERINTAHAN_PT_25K_6,
                popuplayertitle: 'PEMERINTAHAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_6.png" /> PEMERINTAHAN_PT_25K'
            });

var format_JALAN_LN_25K_7 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_7 = format_JALAN_LN_25K_7.readFeatures(json_JALAN_LN_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_7.addFeatures(features_JALAN_LN_25K_7);
var lyr_JALAN_LN_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_7, 
                style: style_JALAN_LN_25K_7,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_7.png" /> JALAN_LN_25K'
            });

var format_JEMBATAN_PT_25K_8 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_25K_8 = format_JEMBATAN_PT_25K_8.readFeatures(json_JEMBATAN_PT_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_25K_8.addFeatures(features_JEMBATAN_PT_25K_8);
var lyr_JEMBATAN_PT_25K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_25K_8, 
                style: style_JEMBATAN_PT_25K_8,
                popuplayertitle: 'JEMBATAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_25K_8.png" /> JEMBATAN_PT_25K'
            });

lyr_WorldImageryClarityBeta_0.setVisible(true);lyr_ADMINISTRASI_AR_DESAKEL_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_SARANAIBADAH_PT_25K_3.setVisible(true);lyr_RUMAHSAKIT_PT_25K_4.setVisible(true);lyr_PENDIDIKAN_PT_25K_5.setVisible(true);lyr_PEMERINTAHAN_PT_25K_6.setVisible(true);lyr_JALAN_LN_25K_7.setVisible(true);lyr_JEMBATAN_PT_25K_8.setVisible(true);
var layersList = [lyr_WorldImageryClarityBeta_0,lyr_ADMINISTRASI_AR_DESAKEL_1,lyr_SUNGAI_LN_25K_2,lyr_SARANAIBADAH_PT_25K_3,lyr_RUMAHSAKIT_PT_25K_4,lyr_PENDIDIKAN_PT_25K_5,lyr_PEMERINTAHAN_PT_25K_6,lyr_JALAN_LN_25K_7,lyr_JEMBATAN_PT_25K_8];

lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDEBPS': 'Kode BPS Kelurahan/Desa', 'KDEPUM': 'Kode PUM Kelurahan/Desa', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'LUASWH': 'Luas Wilayah Menurut Peraturan (HA)', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Nama wilayah administrasi Kecamatan atau Distrik', 'WADMKD': 'Nama wilayah administrasi Kelurahan atau Desa', 'WADMKK': 'Nama wilayah administrasi Kabupaten/ Kota', 'WADMPR': 'Nama wilayah administrasi Provinsi', 'WIADKC': 'Nama wilayah induk administrasi Kecamatan/Distrik', 'WIADKK': 'Nama wilayah induk administrasi Kebupaten/ Kota', 'WIADPR': 'Nama wilayah induk administrasi Propinsi', 'WIADKD': 'Nama wilayah induk administrasi Kelurahan/Desa ', 'UUPP': 'Referensi Peraturan', 'luas': 'luas', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'ADATGL': 'Keberadaan Tanggul', 'DMAX': 'Kelerengan Rata-rata', 'FNGAIR': 'Manfaat Air', 'JNSSNG': 'Tipe Sungai', 'KLSSNG': 'Ordo Sungai', 'LTKSGI': 'Letak Sungai', 'NAMWS': 'Nama Wilayah Sungai', 'STATUS': 'Status', 'UKRSGI': 'Ukuran Sungai', 'WMAX': 'Lebar Maksimum', 'DBTMXS': 'Debit Maksimal Sungai', 'NAMDAS': 'NAMDAS', 'SHAPE_Length': 'SHAPE_Length', });
lyr_SARANAIBADAH_PT_25K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'FGSPRP': 'Fungsi Bangunan Peribadatan', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'JPLYRS': 'Jenis Pelayanan Rumah Sakit', 'RSALAMAT': 'Alamat Rumah Sakit', 'TIPRST': 'Tipe Rumah Sakit', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'KODEBP': 'Bentuk Pendidikan', 'STSPML': 'Status Kepemilikan', 'JJGPDF': 'Jenjang Pendidikan', 'JLPDDK': 'Jalur Pendidikan', 'JNSPDK': 'Jenis Pendidikan', 'FGDPDK': 'Fungsi Gedung Penddikan', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'FGSFNP': 'Fungsi Bangunan Pemerintahan', });
lyr_JALAN_LN_25K_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'ARHRJL': 'Arah Jalan', 'AUTRJL': 'Status Jalan', 'FGSRJL': 'Fungsi Jalan', 'JARRJL': 'Sistem Jaringan Jalan', 'JPARJL': 'Jumlah Lajur', 'KLLRJL': 'Pengelola Ruas Jalan', 'KONRJL': 'Kondisi Fisik', 'KPMSTR': 'Kapasitas Muatan Sumbu Terberat (MST)', 'LKONOF': 'Lokasi On/Off Ramp', 'LKSBSP': 'Lokasi Black Spot', 'LKSRTA': 'Lokasi Rest Area', 'LLHRRT': 'Lalulintas Harian Rata-rata Tahunan', 'LOCRJL': 'kelas jalan berdasarkan posisinya', 'LBRBHJ': 'Lebar Rata-rata Bahu Jalan', 'LBRJLN': 'Lebar Rata-rata Perkerasan Jalan', 'MATRJL': 'Tipe Bahan', 'MEDRJL': 'Pembatas Jalan', 'SPCRJL': 'Spesifikasi Jaringan Jalan', 'STARJL': 'Status Pembangunan Jalan', 'TOLRJL': 'Jalan Tol', 'UTKRJL': 'Peruntukan Jalan', 'VLCPRT': 'Volume Capacity Ratio (VCR)', 'WLYRJL': 'Wilayah Pelayanan Jalan', 'TGL_SK': 'Tanggal SK', 'JLNLYG': 'Jalan Layang', 'KLSRJL': 'KLSRJL', 'SHAPE_Length': 'SHAPE_Length', });
lyr_JEMBATAN_PT_25K_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'AYUJMB': 'Kemampuan Jembatan', 'BTSJMB': 'Tipe Jembatan BAT', 'DEKJMB': 'Tipe Dek', 'FGSJMB': 'Fungsi Jembatan', 'JMLBTG': 'Jumlah Bentang', 'KDBBWH': 'Kondisi Bangunan Bawah', 'KDBGAT': 'Kondisi Bangunan Atas', 'KDLNTI': 'Kondisi Lantai', 'KDUJMB': 'Kondisi Umum Jembatan', 'LBRJMB': 'Lebar Jembatan', 'LBRTRT': 'Lebar Trotoar', 'MATJMB': 'Bahan Jembatan', 'TBGNAT': 'Tipe Bangunan Atas', 'TGRNBS': 'Clearance (Tinggi Ruang Bebas)', 'THNPBN': 'Tahun Pembangunan', 'TIPJMB': 'Tipe Jembatan', 'TONJMB': 'Tonasi', 'STRJMB': 'Struktur Sistem Jembatan', 'TGGJMB': 'Tinggi Jembatan', });

lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'ValueMap', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': 'ValueMap', 'DMAX': '', 'FNGAIR': 'ValueMap', 'JNSSNG': 'ValueMap', 'KLSSNG': 'ValueMap', 'LTKSGI': 'ValueMap', 'NAMWS': '', 'STATUS': '', 'UKRSGI': 'ValueMap', 'WMAX': '', 'DBTMXS': '', 'NAMDAS': '', 'SHAPE_Length': '', });
lyr_SARANAIBADAH_PT_25K_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSPRP': 'ValueMap', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JPLYRS': 'ValueMap', 'RSALAMAT': '', 'TIPRST': 'ValueMap', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KODEBP': 'ValueMap', 'STSPML': 'ValueMap', 'JJGPDF': 'ValueMap', 'JLPDDK': 'ValueMap', 'JNSPDK': 'ValueMap', 'FGDPDK': 'ValueMap', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSFNP': 'ValueMap', });
lyr_JALAN_LN_25K_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'ValueMap', 'AUTRJL': 'ValueMap', 'FGSRJL': 'ValueMap', 'JARRJL': 'ValueMap', 'JPARJL': 'ValueMap', 'KLLRJL': 'TextEdit', 'KONRJL': 'ValueMap', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'ValueMap', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'ValueMap', 'MEDRJL': 'ValueMap', 'SPCRJL': 'ValueMap', 'STARJL': 'ValueMap', 'TOLRJL': 'ValueMap', 'UTKRJL': 'ValueMap', 'VLCPRT': 'TextEdit', 'WLYRJL': 'ValueMap', 'TGL_SK': 'DateTime', 'JLNLYG': 'ValueMap', 'KLSRJL': 'ValueMap', 'SHAPE_Length': 'TextEdit', });
lyr_JEMBATAN_PT_25K_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'AYUJMB': 'ValueMap', 'BTSJMB': 'ValueMap', 'DEKJMB': 'ValueMap', 'FGSJMB': 'ValueMap', 'JMLBTG': 'TextEdit', 'KDBBWH': 'ValueMap', 'KDBGAT': 'ValueMap', 'KDLNTI': 'ValueMap', 'KDUJMB': 'ValueMap', 'LBRJMB': 'TextEdit', 'LBRTRT': 'TextEdit', 'MATJMB': 'ValueMap', 'TBGNAT': 'TextEdit', 'TGRNBS': 'TextEdit', 'THNPBN': 'DateTime', 'TIPJMB': 'ValueMap', 'TONJMB': 'Range', 'STRJMB': 'ValueMap', 'TGGJMB': 'TextEdit', });

lyr_ADMINISTRASI_AR_DESAKEL_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'no label', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'no label', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'inline label - visible with data', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Length': 'no label', });
lyr_SARANAIBADAH_PT_25K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSPRP': 'inline label - visible with data', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'inline label - visible with data', 'RSALAMAT': 'inline label - visible with data', 'TIPRST': 'no label', });
lyr_PENDIDIKAN_PT_25K_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KODEBP': 'inline label - visible with data', 'STSPML': 'inline label - visible with data', 'JJGPDF': 'no label', 'JLPDDK': 'no label', 'JNSPDK': 'no label', 'FGDPDK': 'no label', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSFNP': 'inline label - visible with data', });
lyr_JALAN_LN_25K_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'inline label - visible with data', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'inline label - visible with data', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Length': 'no label', });
lyr_JEMBATAN_PT_25K_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'AYUJMB': 'no label', 'BTSJMB': 'no label', 'DEKJMB': 'no label', 'FGSJMB': 'no label', 'JMLBTG': 'no label', 'KDBBWH': 'no label', 'KDBGAT': 'no label', 'KDLNTI': 'no label', 'KDUJMB': 'inline label - visible with data', 'LBRJMB': 'no label', 'LBRTRT': 'no label', 'MATJMB': 'inline label - visible with data', 'TBGNAT': 'no label', 'TGRNBS': 'no label', 'THNPBN': 'no label', 'TIPJMB': 'no label', 'TONJMB': 'no label', 'STRJMB': 'no label', 'TGGJMB': 'no label', });
lyr_JEMBATAN_PT_25K_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});