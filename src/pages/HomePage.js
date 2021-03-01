import React from 'react';
import texts from './all-texts';
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
                <div className="row bg-secondary border p-5">
                    <h2 className="col col-sm-12">[Get into my brain]</h2>
                    <p  className="col col-sm-12"></p>
                    <div className="col border p-5"></div>
                    <div className="col border p-5"></div>
                    <div className="col border p-5"></div>
                </div>

                <div className="row bg-dark border p-5 text-white">
                    <h2>[PICTURE GAL]</h2>
                </div>
                <div className="row bg-danger p-5 text-">
                    <ul><Drivers /></ul>
                </div>
            </>
        )
    }
}

export default HomePage