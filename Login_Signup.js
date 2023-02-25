import './Login_Signup.css';
const Login = () => {
    function Registre() {
        document.getElementsByClassName('box1')[0].style.display = 'none'
        document.getElementsByClassName('box2')[0].style.display = 'block'
        document.getElementsByClassName('box')[0].classList.add('Active');
    }
    function Login() {
        document.getElementsByClassName('box2')[0].style.display = 'none'
        document.getElementsByClassName('box1')[0].style.display = 'block'
        document.getElementsByClassName('box')[0].classList.remove('Active');
    }
    function Darkmode(){
        let dark = document.getElementsByClassName('parent')[0];
        dark.classList.toggle('Darkmode')
        let btndark = document.getElementsByClassName('dark')[0];
        if(dark.className === 'Darkmode'){

            if(btndark.innerHTML === 'Dark Mode'){
                btndark.innerHTML = 'Light Mode'
            };
            if(btndark.innerHTML === 'Light Mode'){
                btndark.innerHTML = 'Dark Mode'
            }
        }
    }
    return (
        <div className="parent">
            <div className="box">
                <div className='box1'>

                    <form id="Login" action="">
                        <h2>Login</h2>
                        <input type={"email"} className='ipt' required placeholder="Email" />
                        <input type={"password"} className='ipt' required placeholder="Password" />
                        <input type={"Submit"} href="Login" className='submit' value={"Login"} />
                    </form>
                    <div className="div_btns">
                        <button href="Registre" onClick={Registre}><i> SignUp</i></button>
                    </div>
                </div>
                <div className='box2'>
                    <form id="Registre" action="">
                        <h2>SignUp</h2>
                        <input type={"text"} className='ipt' required placeholder="your Name" />
                        <input type={"text"} className='ipt' required placeholder="your Number" />
                        <input type={"email"} className='ipt' required placeholder="Email" />
                        <input type={"password"} className='ipt' required placeholder="Password" />
                        <input type={"password"} className='ipt' required placeholder="Confirm Password" />
                        <input type={"Submit"} href="Login" className='submit' value={"Registre"} />
                    </form>
                    <div className="div_btns">
                        <button href="Registre" onClick={Login}><i> Login </i></button>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <button className='dark' onClick={Darkmode}>Dark Mode</button>
        </div>
    )
}
export default Login;