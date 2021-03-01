import React from 'react';
import texts from './all-texts';
import $ from 'jquery';

const ImageContext = require.context('../images', false, /\.(png|jpe?g|gif)$/);

const ImportAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const Images = ImportAll(ImageContext);

const Drivers = () => {
    let items = texts.Drivers.map((element, key) => <li key={key}>{element}</li>);
    // console.log(items)
    return items;
}

var slideIndex = 1;

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    plusSlides(n) {
        this.showSlides(slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1; }
        else if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            console.log(dots[i].className)
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // console.log(slides.length)
        if(slides.length > 0){
            console.log(dots[slideIndex - 1]);
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
        // slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    };

    // this.showSlides(slideIndex)
    componentDidMount(){
        this.showSlides(slideIndex);
    }


    render() {
        // console.log(Images)
        return (
            <>
                <div className="text-center text-white no-wrap p-5" id="first-div">
                    <h3 className="pb-4">Hey, I'm</h3>
                    <h1 className="pb-5"><i className="fas fa-grip-lines "></i> NGOZI SILAS E. <i className="fas fa-grip-lines"></i></h1>
                    <div className="pb-4">
                        <img className="rounded-circle z-depth-2 avatar bounce" src={Images["myAvatar.png"].default} alt="myAvatar" height={150} width={150}
                            data-holder-rendered="true" />
                    </div>
                </div>

                {/* <div className="row p-5 bg-warning d-block text-center text-white hidden no-wrap" id="first-div-hidden">
                    <h3 className="pb-4">Hey, I'm</h3>
                    <h1 className="pb-5"><i className="fas fa-grip-lines "></i> NGOZI SILAS E. <i className="fas fa-grip-lines"></i></h1>
                    <div className="pb-4">
                        <img className="rounded-circle z-depth-2 avatar bounce" src={Images["myAvatar.png"].default} alt="myAvatar" height={150} width={150}
                            data-holder-rendered="true" />
                    </div>
                </div> */}
                <div className="row bg-info">
                    <div className="col col-sm-4 border bg-clear p-5">
                        [project 1 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 1 description]
                    </div>
                    <div className="col col-sm-4 border bg-clear p-5">
                        [project 2 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 2 description]
                    </div>
                    <div className="col col-sm-4 border bg-clear p-5">
                        [project 3 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 3 description]
                    </div>
                    <div className="col col-sm-4 border bg-clear p-5">
                        [project 4 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 4 description]
                    </div>
                    <div className="col col-sm-4 border bg-clear p-5">
                        [project 5 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 5 description]
                    </div>
                </div>
                {/* <div className="container-fluid p-5 bg-danger w-100 pl-0 ml-0"></div> */}
                <div className="row bg-secondary border p-5 text-center">
                    <h2 className="col col-sm-12">[Get into my brain]</h2>
                    <p className="col col-sm-12"></p>
                    <div className="col border ">
                        <img src={Images["manet.jpg"].default} width="100%" height="200" alt="" />
                        <p>Thesis: A DHT-Based Routing Solution for Hierarchical MANETs</p>
                    </div>
                    <div className="col border ">
                        <img src={Images["DHT.jpg"].default} width="100%" height="200" alt="" />
                        <p>Conference Paper: Evaluating choord over a hierarchical MANET</p>
                    </div>
                    <div className="col border ">
                        <img src={Images["P2P.jpg"].default} width="100%" height="200" alt="" />
                        <p>Journal Paper: P2P Overlay Performance in Large Scale MANETs</p>
                    </div>
                </div>
                    {/* <div className="container-3 no-wrap">
                        <div className="em-dash">
                            <div className="em-dash_black"></div><h1> Pictures speak volumes </h1><div className="em-dash_black"></div>
                        </div>
                        
                        <div className="mySlides">
                            <div className="numbertext">1 / 27</div>
                            <img src={Images["staySafe.jpg"].default} width="30%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">2 / 27</div>
                            <img src={Images["220px-Mickey_Mouse.png"].default} width="25%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">3 / 27</div>
                            <img src={Images["abstract-tiger.jpg"].default} width="25%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">4 / 27</div>
                            <img src={Images["background.jpeg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">5 / 27</div>
                            <img src={Images["background0.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">6 / 27</div>
                            <img src={Images["background10.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">7 / 27</div>
                            <img src={Images["background12.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">8 / 27</div>
                            <img src={Images["background7.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">9 / 27</div>
                            <img src={Images["background8.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">10 / 27</div>
                            <img src={Images["background9.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">11 / 27</div>
                            <img src={Images["beach.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">12 / 27</div>
                            <img src={Images["donaldDaisy.jpg"].default} width="40%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">13 / 27</div>
                            <img src={Images["donaldDuck.png"].default} width="30%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">14 / 27</div>
                            <img src={Images["faceArt.jpg"].default} width="20%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">15 / 27</div>
                            <img src={Images["faceSketch.jpg"].default} width="40%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">16 / 27</div>
                            <img src={Images["fall_season.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">17 / 27</div>
                            <img src={Images["fall_season_0.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">18 / 27</div>
                            <img src={Images["fall_season_1.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">19 / 27</div>
                            <img src={Images["flamingo.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">20 / 27</div>
                            <img src={Images["flowerLion.jpg"].default} width="40%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">21 / 27</div>
                            <img src={Images["infant.jpg"].default} width="50%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">22 / 27</div>
                            <img src={Images["melanin.jpg"].default} width="20%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">23 / 27</div>
                            <img src={Images["painting.jpg"].default} width="20%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">24 / 27</div>
                            <img src={Images["painting0.jpg"].default} width="20%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">25 / 27</div>
                            <img src={Images["sketch.jpg"].default} width="60%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">26 / 27</div>
                            <img src={Images["sketch0.jpg"].default} width="25%" height="400" alt="" />
                        </div>
                        <div className="mySlides">
                            <div className="numbertext">27 / 27</div>
                            <img src={Images["mamaAfrica.png"].default} width="25%" height="400" alt="" />
                        </div>

                        
                        <a href="##" className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
                        <a href="##" className="next" onClick={this.plusSlides(1)}>&#10095;</a>

                        
                        <div className="caption-container">
                            <p id="caption"></p>
                        </div>

                       
                        <div className="row">
                            <div className="col-sm-1">
                                <img className="demo" src={Images["staySafe.jpg"].default} height="100"
                                    onClick={this.currentSlide(26)} alt="Stay safe" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["220px-Mickey_Mouse.png"].default} height="100"
                                    onClick={this.currentSlide(2)} alt="Mickey Mouse" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["abstract-tiger.jpg"].default} height="100"
                                    onClick={this.currentSlide(3)} alt="Abstract Tiger" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background.jpeg"].default} height="100"
                                    onClick={this.currentSlide(4)} alt="Sun Set" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background0.jpg"].default} height="100"
                                    onClick={this.currentSlide(5)} alt="Rusty Tracks" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background10.jpg"].default} height="100"
                                    onClick={this.currentSlide(6)} alt="Brick Wall" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background12.jpg"].default} height="100"
                                    onClick={this.currentSlide(7)} alt="Flower in the dark" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background7.jpg"].default} height="100"
                                    onClick={this.currentSlide(8)} alt="Blood Moon" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background8.jpg"].default} height="100"
                                    onClick={this.currentSlide(9)} alt="Fading into the dark" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["background9.jpg"].default} height="100"
                                    onClick={this.currentSlide(10)} alt="city at night" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo" src={Images["beach.jpg"].default} height="100" 
                                onClick={this.currentSlide(11)}
                                    alt="Sun set" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["donaldDaisy.jpg"].default} height="100"
                                    onClick={this.currentSlide(12)} alt="Donald and Daisy" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["donaldDuck.png"].default} height="100"
                                    onClick={this.currentSlide(13)} alt="Donald Duck" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["faceArt.jpg"].default} height="100"
                                    onClick={this.currentSlide(14)} alt="Face art on canvas" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["faceSketch.jpg"].default} height="100"
                                    onClick={this.currentSlide(15)} alt="sketch of Rapunzel" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["fall_season.jpg"].default} height="100"
                                    onClick={this.currentSlide(16)} alt="Fall season - Chelsea Park" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["fall_season_0.jpg"].default} height="100"
                                    onClick={this.currentSlide(17)} alt="Fall season - Gateneau wolf trails" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["flamingo.jpg"].default} height="100"
                                    onClick={this.currentSlide(19)} alt="Flamingo painting" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["flowerLion.jpg"].default} height="100"
                                    onClick={this.currentSlide(20)} alt="Flower Lion" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["infant.jpg"].default} height="100"
                                    onClick={this.currentSlide(21)} alt="Babes are cute" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["painting.jpg"].default} width="100%" height="100"
                                    onClick={this.currentSlide(23)} alt="Calabash woman - 1" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["painting0.jpg"].default} width="100%" height="100"
                                    onClick={this.currentSlide(24)} alt="Calabash woman - 2" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["sketch.jpg"].default} height="100"
                                    onClick={this.currentSlide(25)} alt="In the woods" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["sketch0.jpg"].default} height="100"
                                    onClick={this.currentSlide(26)} alt="Art is beautiful" />
                            </div>
                            <div className="col-sm-1">
                                <img className="demo " src={Images["mamaAfrica.png"].default} height="100"
                                    onClick={this.currentSlide(1)} alt="Mama Africa" />
                            </div>
                        </div>
                    </div> */}
                
                <div className="row bg-danger p-5 text-">
                    <ul><Drivers /></ul>
                </div>
            </>
        )
    }
}

export default HomePage