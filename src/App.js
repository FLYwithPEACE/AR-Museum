import React from 'react';
import Modal from 'react-awesome-modal';
import './App.css';

class Grid extends React.Component {
    state = { show: false };

    openModal() {
        this.setState({
            show : true
        });
    }

    closeModal() {
        this.setState({
            show : false
        });
    }

    renderSquare(img = false, text = false, url = false) {
      const image = img && <img src={img}/>;
      const title = text && <div className='centered'> {text} </div>;
      const qr = url && process.env.PUBLIC_URL + url;
      return (
        <button
            className='square'
            onClick={() => this.openModal()}>
            <Modal visible={this.state.show} width="400" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1 style={{fontFamily: 'Lora'}}>Scan me</h1>
                        <img src={qr} style={ { width:'100%' }}/>
                        <a href={'javascrip:void(0)'} style={ { background:'#fff'} } onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            {image}
            {title}
        </button>
      )
    }
    render() {
      return(
        <div>
          <div>
            {this.renderSquare('https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-vue-de-la-pyramide-du-louvre.jpg', 'The Louvre, Paris, France', 'louvre.png')}
            {this.renderSquare('https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solomon_R._Guggenheim_Museum_%2848059131351%29.jpg/1024px-Solomon_R._Guggenheim_Museum_%2848059131351%29.jpg', 'Guggenheim Museum, New York, NY', 'guggenheim.png')}
            {this.renderSquare('https://www.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg?la=en', 'The MET, New York, NY', 'met.png')}
          </div>
          <div>
            {this.renderSquare('https://www.tate.org.uk/sites/default/files/styles/width-600/public/images/newtatemodernsouthview.jpg', 'Tate Moderm, London, UK', 'tate.png')}
            {this.renderSquare('https://www.museum-brandhorst.de/imgs/museum-brandhorst-au%C3%9Fenansicht-1280x800.jpg', 'Museum Brandhorst, Munich, Germany', 'brandhorst.jpg')}
            {this.renderSquare('https://media-exp1.licdn.com/dms/image/C561BAQEw7KL3JnRJ9Q/company-background_10000/0?e=2159024400&v=beta&t=3jj6nVo1Vkb98pDIuFEIZwE4CVpzQVeC2i65pN_xruA', 'Hermitage Museum, Saint Petersburg, Russia', 'hermitage.png')}
          </div>
          <div>
            {this.renderSquare('https://www.modernamuseet.se/stockholm/wp-content/uploads/sites/3/2016/02/Moderna_Museet_Sthlm_Photo_Asa_Lunden_1500x1000-980x653.jpg', 'Moderna Museet, Stockholm, Sweden', 'moderna.png')}
            {this.renderSquare('https://www.architecturalrecord.com/ext/resources/archives/projects/Building_types_study/museums/2011/images/MACRO-Museum-1_Exterior.jpg', 'Museum of Contemporary Art of Rome, Rome, Italy', 'moca_rome.png')}
            {this.renderSquare('https://www.arch2o.com/wp-content/uploads/2018/10/Arch2O-AtelierDeshaus-ShanghaiModernArtMuseum-34.jpg', 'Museum of Contemporary Art Shanghai, Shanghai, China', 'moca_shanghai.png')}
          </div>
        </div>
      );
    }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app-header">
          AR(t) Museum Experience
        </div>
        <div className="app">
          <Grid />
        </div>
        <div className="app">
          Made for 'Hack the World 2020'
        </div>
      </div>
    );
  }
}

export default App;
