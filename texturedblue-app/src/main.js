import './main.css';
import {FaSearch} from 'react-icons/fa'
function Main(){ 
    return(
    <div>
        <div className='main'>
            <div className='center'>
                <div className="cent">
                <div id='left'>
                    <h3>Welcome to the textured_blue template</h3>
                    <p>Lorem ipsum dolor sit amet consect placeat ipsum dicta. Eveniet illum, dolorum, sunt, vId eveniet <a href="#">adipisci quae perferendis voluptates,</a> consequuntur aperiam quaerat soluta doloribus nemo corrupti optio quas aliquid quod explicabo aspernatur maiores aliquam sequi!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adg elit. Non, autem?Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing <a href="#">here</a>.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <a href="#">Loremipsum.</a> sit error fuga minima neque dolorum nostrum reprehenderit aliquam commodi laboriosam.</p>
                    <h2>Browser Compatibility</h2>
                    <p>The template works in the following browsers </p>
                    <ul className="list">
                        <li>Internet Explorer III</li>
                        <li>Internet Explorer II</li>
                        <li>Firefox</li>
                        <li>Google Chrome</li>
                    </ul>
                </div>
                <div id='right'>
                    <h3>Latest News</h3>
                    <h5>How Website Launched</h5>
                    <h6>Lorem, ipsum dolor.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae?<br/><a href="#">Read More</a></p>
                    
                    
                    <h5>How Website Launched</h5>
                    <h6>Lorem, ipsum dolor.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, recusandae?<br/><a href="#">Read More</a></p>

                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link2</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link4</a></li>
                    </ul>

                    <h3>Search</h3>
                    <input type="search" name="" id="" placeholder="Enter keywords"/><img src="#" alt=""/><FaSearch/>
                </div>
                
                </div>
                <footer>
                copyright &copy; textured_blue html | css| design from htmltemplate.co.in
            </footer>
            </div>
            
        </div>
    </div>
    )
}
export default Main;