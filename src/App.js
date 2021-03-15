import tasA from './assets/bag_1.png'
import tasB from './assets/bag_2.png'
import tasC from './assets/bag_3.png'
import tasD from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'

import React, {Fragment} from 'react';
import './App.css';
import Button from "./assets/components/Button";
import Product from "./assets/components/Product";
import Tile from "./assets/components/Tile";

function App() {
  return (
      <Fragment>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              disabled={false}
              item="shop all bags"
          />
          <Button
              disabled={false}
              item="pre-orders"
          />
          <Button
              disabled={true}
              item="to the collection"
          />
        </nav>
        <main>

          <Product
              label={"Best seller"}
              image={tasA}
              description={"The handy bag"}
              price={"400"}
          />

          <Product
              label={"Best seller"}
              image={tasB}
              description={"The stylish bag"}
              price={"250"}
          />

          <Product
              label={"New collection"}
              image={tasC}
              description={"The simple bag"}
              price={"300"}
          />

          <Product
              label={"New collection"}
              image={tasD}
              description={"The handy bag"}
              price={"150"}
          />

        </main>
        <footer>
          <Tile
              title ={"The Brand"}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deserunt, et eveniet ipsam magnam
              quidem! A accusantium consequuntur esse eveniet maxime nobis quibusdam quis repellat, repellendus,
              similique unde, veniam!"
            </p>

            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deserunt, et eveniet ipsam magnam
              quidem! A accusantium consequuntur esse eveniet maxime nobis quibusdam quis repellat, repellendus,
              similique unde, veniam!"
            </p>
          </Tile>

          <Tile
              image={brand}
              altImage={"brand-content"}
          />
          <Tile
              image={story}
              altImage={"story-content"}
          />
          <Tile
              title ={"Our story"}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deserunt, et eveniet ipsam magnam
              quidem! A accusantium consequuntur esse eveniet maxime nobis quibusdam quis repellat, repellendus,
              similique unde, veniam!"
            </p>

            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deserunt, et eveniet ipsam magnam
              quidem! A accusantium consequuntur esse eveniet maxime nobis quibusdam quis repellat, repellendus,
              similique unde, veniam!"
            </p>
          </Tile>

        </footer>
      </Fragment>
  );
}

export default App;



