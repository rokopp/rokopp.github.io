var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
    var loaded = document.getElementById("portfolioContainer");
    loaded.style.display = "block";
}
preload(
    "images/portfolio/ratsutamine1.jpg",
    "images/portfolio/red2.jpg",
    "images/portfolio/ratsutamine2.jpg",
    "images/portfolio/ratsutamine3.jpg",
    "images/portfolio/enni1.jpg",
    "images/portfolio/ratsutamine5.jpg",
    "images/portfolio/red1.jpg",
    "images/portfolio/sanza1.jpg",
    "images/portfolio/sanza3.jpg",
    "images/portfolio/sanza2.jpg",
    "images/portfolio/red3.jpg",
    "images/portfolio/ratsutamine4.jpg",
    "https://photos.smugmug.com/photos/i-pGhFJhd/0/XL/i-pGhFJhd-XL.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Q87GrBx/0/8f9ded6a/X2/3-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-nZ4sL7f/0/9a729737/X2/2-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-WNMcSNR/0/545e2d29/X2/4-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-mzKP6QB/0/9e9504d2/X2/5-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-McqgP7n/0/6621cf63/X2/6-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-fCTjqnk/0/2ed9d832/X2/4.5-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-8VSgB5T/0/50f45b08/X2/7-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-s3g4dg9/0/70be5ea7/X2/8-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-cXcp5Tm/0/8e4ce19f/X2/10-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Gw46nQx/0/2a11d622/X2/11-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-dn5WzM4/0/20b99ea6/X2/12-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-2jM5NGP/0/589657ff/X2/9-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-nzWtNcG/0/7586fdb8/X2/14-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-738NWrS/0/fb5cfc51/X2/13-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-7qFmvQk/0/d1942edb/X2/15-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-J2TrgM8/0/d3532323/X2/16-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-qjDB43G/0/b67030b2/X2/18-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-9Qmpd9Z/0/d7bb29ef/X2/19-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-nv35DqP/0/e06bd203/X2/17-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-vCBFZDp/0/4a80c6a8/X2/20-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-KGFmjLM/0/1033d5ff/X2/21-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-NLwRQ2w/0/537895b3/X2/23-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Mp6xqGF/0/8002a5f9/X2/22-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-FSbv45Z/0/da0e6392/X2/25-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-dBMzxXq/0/b91df550/X2/24-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-34DcLFB/0/6134bbbc/X2/26-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-nBfnrgP/0/5754e912/X2/27-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-rzVRMjt/0/2bddb99a/X2/29-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-6D9WqD2/0/b06d82b8/X2/30-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-BWffNpM/0/c4284289/X2/28-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-CpwCt7H/0/caa8871b/X2/31-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-2FtjFTr/0/f57566f2/X2/32.5-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-2Lnhfr2/0/882e344b/X2/32-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-cbt5ksv/0/507b5658/X2/34-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-SW9NnTg/0/374b2f78/X2/36-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-RbwvxFP/0/4becde71/X2/37-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-SfhcM76/0/fad2e4cd/X2/35-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-pZh3hHG/0/503d7b17/X2/38-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-F8Bs3bn/0/dcf47d81/X2/40-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-qX9QgJB/0/c1b4e276/X2/41-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-kBQHqTN/0/1b41b8d6/X2/42-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-xnrNHBP/0/d60c549d/X2/39-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-vt6xq2h/0/e633ac78/X2/44-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-p697kt3/0/e0db6601/X2/45-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-cJTJRM2/0/b1d551dc/X2/43-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-jXrC49N/0/ea5fed28/X2/48-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-WbV7fFt/0/e83944fa/X2/46-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Xc4L6Nh/0/055d3dc8/X2/49-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-7Lf6QKM/0/5ae92b31/X2/51-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Lc3kKtw/0/25dc08e1/X2/50-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-ZLt3RsD/0/afab90bc/X2/52-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-r32jLkZ/0/fae9b5bb/X2/55-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-C3jM6PR/0/4a3f0740/X2/56-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-5BLFjw5/0/49afbe4e/X2/53-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-KKJvrvZ/0/466bf84b/X2/58-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-wnSXp8B/0/a5c330d9/X2/57-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-Lk24LVf/0/a983b783/X2/60-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-RLh84Bf/0/4ec5b87b/L/61-L.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-3vRpDKR/0/8ee075ee/X2/59-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-XG9pWBh/0/0e93f2c6/X2/62-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-6m2mDNd/0/9c3372fe/X2/IMG_5669-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-phPcPzv/0/7a8efa81/X2/IMG_6259-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-9FS4SCW/0/18b08b5d/X2/l-X2.jpg",
    "https://photos.smugmug.com/Portfolio-of-Laura-Pedjak/i-jjhHmh2/0/7d4fd01b/X2/IMG_7403-X2.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
)
