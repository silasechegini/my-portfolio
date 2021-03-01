import React from 'react';
import texts from './all-texts';
import Colors from './Colors'
import {BsDash} from 'react-icons/bs'

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

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        // console.log(Images)
        return (
            <>
                <div className="row border">
                    <div className="text-center text-white p-5 w-100" id="first-div">
                        <h3 className="pb-4">Hey, I'm</h3>
                        <h1 className="pb-5 "><BsDash className="fa-4x"/> NGOZI SILAS E. <BsDash className="fa-4x"/></h1>
                        <div className="pb-4">
                            <img className="rounded-circle z-depth-2 avatar bounce" src={Images["myAvatar.png"].default} alt="myAvatar" height={150} width={150}
                                data-holder-rendered="true" />
                        </div>
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

                <div className="row " style={{ "backgroundColor": Colors.Blue_2.Celestial }}>
                    <div className="col col-sm-4 border p-5">
                        [project 1 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 1 description]
                    </div>
                    <div className="col col-sm-4 border  p-5">
                        [project 2 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 2 description]
                    </div>
                    <div className="col col-sm-4 border  p-5">
                        [project 3 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 3 description]
                    </div>
                    <div className="col col-sm-4 border  p-5">
                        [project 4 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 4 description]
                    </div>
                    <div className="col col-sm-4 border  p-5">
                        [project 5 image]
                    </div>
                    <div className="col col-sm-8 border p-5">
                        [project 5 description]
                    </div>
                </div>


                {/* <div className="container-fluid p-5 bg-danger w-100 pl-0 ml-0"></div> */}
                <div className="row p-5 text-center" style={{ "backgroundColor": Colors.Blue_2.Elation }}>
                    <h2 className="col col-sm-12"><BsDash className="fa-4x"/>Get into my brain<BsDash className="fa-4x"/></h2>
                    <p className="col col-sm-12 pb-4">{texts.Projects}</p>
                    <div className="col ">
                        <a href="https://curve.carleton.ca/4468ee0a-f1fc-4a98-b10c-d810d24d14c2" target="_blanc">
                            <img className="animated zoom" src={Images["manet.jpg"].default} width="100%" height="200" alt="" />
                        </a>
                        <p className="pt-4">Thesis: A DHT-Based Routing Solution for Hierarchical MANETs</p>
                    </div>
                    <div className="col ">
                        <a href="https://ieeexplore.ieee.org/document/8117159" target="_blanc">
                            <img className="animated zoom" src={Images["DHT.jpg"].default} width="100%" height="200" alt="" />
                        </a>
                        <p className="pt-4">Conference Paper: Evaluating choord over a hierarchical MANET</p>
                    </div>
                    <div className="col ">
                        <a href="https://www.researchgate.net/publication/327142993_P2P_Overlay_Performance_in_Large-Scale_MANETs/fulltext/5b7cb06692851c1e122686a8/P2P-Overlay-Performance-in-Large-Scale-MANETs.pdf"
                            target="_blanc">
                            <img className="animated zoom" src={Images["P2P.jpg"].default} width="100%" height="200" alt="" />
                        </a>
                        <p className="pt-4">Journal Paper: P2P Overlay Performance in Large Scale MANETs</p>
                    </div>
                </div>

                <div className="row p-5 text-center " style={{ "backgroundColor": Colors.Blue_2.Nugget }}>
                    <h2 className="mx-auto"><BsDash className="fa-4x"/>A Few things that drive me<BsDash className="fa-4x"/></h2>
                    <div className="container-fluid">
                        <ul className="list-unstyled mx-auto"><Drivers /></ul>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage