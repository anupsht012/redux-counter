import logo from '../../assets/images/logo.png'
export const Logo = ()=>{
    return <div className="logo">
        <img src={logo} alt="logo" className={"image-contain-center"} height={'60'} width={200}/>
    </div>
}