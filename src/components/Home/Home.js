import React from 'react';
import { Image } from 'react-bootstrap';
import Header from '../Header/Header';
import image from '../../profile.jpg'

const Home = () => {
    return (
        <div>
        <Header></Header>

        <div class="card m-5">
  <div class="row g-0">
    <div class="col-md-4">
        <Image className='images img-fluid' src ={image}></Image>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">Importance of IT Learning</h3>
        <hr />
        <p class="card-text"> In any country, technical education plays a vital role in human resource development.  It produces a skilled workforce, augments productivity and helps improve the quality of life of the people. Producing qualified and capable human resources in this age of science and technology is indispensable. Without doubt, there is a close relationship between the technical or vocational education system and socio-economic development of a country.
The current education system of Bangladesh may be broadly divided into three major categories viz. general education, madrasah education and technical education. The type of education which provides distinct practical knowledge of technologies and skills is known as technical and vocational education. Technical education offers an excellent opportunity for employment at home and abroad. Countries such as Germany, France, Japan and Sweden pursue effective and extensive technical and vocational education and training. In Australia, technical and further education institutions run a wide range of mostly vocational courses.</p>
       <br />
       <br />
       <h3>Take IT Knowledge and Be advanced!!</h3>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;