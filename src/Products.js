import React, {Component} from 'react';
import Product from './Product';
import './Product.css'

const products = [
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imageSrc: "https://cdn.vox-cdn.com/thumbor/HtsyeSUY5qMjCaPLtMIO1IoQ21Y=/0x0:2880x1350/1200x800/filters:focal(1102x445:1562x905)/cdn.vox-cdn.com/uploads/chorus_image/image/56659171/model_s_001.0.jpg",
        price: 20000,
        name: "Tesla",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
]

class Products extends Component {


    render () {
        return (
            <div className="products">
                <h1>Products</h1>
                {
                   products.map(product => 
                    <Product
                        imageSrc={product.imageSrc}
                        price={product.price}
                        name={product.name}
                        description={product.description}
                    />
                   ) 
                }
            </div>
        )
    }
}

export default Products;
