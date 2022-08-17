///*
const HoaBinh = 0,BaVi = 1,LuongSon=2,TamDao=3,HaLong = 4;
var LocationList = [];
///*
class VillaDataBase {
    constructor (VillaName, description, SoNguoi,Location,hrefLink,MainPicLink,GiaTien)
    {
        this.VillaName = VillaName;
        this.description = description;
        this.SoNguoi = SoNguoi;
        this.Location = Location;
        this.hrefLink = hrefLink;
        this.MainPicLink = MainPicLink;
        this.GiaTien = GiaTien;
        
    }   
    static Filter()
    {
        
    }
     static VillaList = [];
}

//*
VillaDataBase.VillaList.push(new VillaDataBase("HESTIALUXURYVILLA","- 3 phòng đơn (giường King size, chăn, ga, gối, đệm dự phòng) <br>- 1 phòng ngủ tập thể 03 giường view ban công thoáng mát từ đó có thể nhìn xuống hồ câu và bể bơi, 1 nhà vệ sinh chung cùng đầy đủ chăn ga gối đệm dự phòng",7,1,"/villa/HESTIALUXURYVILLA.htm","/villa/HESTIALUXURYVILLA_files/image030.jpg",2800000)); 
//* LAPK
LocationList.push("Hoà Bình");
LocationList.push("Ba Vì");
LocationList.push("Lương Sơn");
LocationList.push("Tam Đảo");
LocationList.push("Hạ Long");
