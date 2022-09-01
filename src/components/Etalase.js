import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Main.css';


let nameProd = 'Carnocap'
let thumb = 'https://hni.net/public/front/img/produk/CARNOCAP-1_04-01-19_.png'
let desc = `KEGUNAAN:

Membantu memelihara kondisi kesehatan pada penderita kanker.

KOMPOSISI:

Keladi Tikus (Thyponii rhizoma ekstrak)
Rumput Mutiara (Hedyotis corymbosa herba ekstrak)
Jombang (Taraxacumae herba ekstrak)
Sambiloto (Andrographidis herba ekstrak)
Kunir Putih (Curcumae mangga rhizome ekstrak)
Temu Putih (Curcumae zedoariae rhizome)
Daun Dewa(Gynura divaricata folium ekstrak)
Bidara Upas (Merremiae tubera ekstrak)`


const Etalase = () => {
  return (
    <>
    <h4 className='Title'>Products</h4>
    <div className='MyEtalase1'>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
          {/* This is Gap Bewtween Rows */}
    <div className='MyEtalase2'>

    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
          {/* This is Gap Bewtween Rows */}
        <div className='MyEtalase2'>

    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Individual-Etalase'>
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{nameProd}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Button variant="outline-success">Pesan Sekarang</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
}

export default Etalase;