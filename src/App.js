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
        <nav id="nav">
          {/*<button type="button" id="button" onClick={()=>console.log("to the collection - You've! got clicked! 1")}>*/}
          {/*    >to the collection*/}
          {/*</button>*/}
          {/*<button type="button" id="button" onClick={()=>console.log("shop all bags- You've got clicked! 2")}>*/}
          {/*    >shop all bags*/}
          {/*</button>*/}
          {/*<button type="button" id="button" onClick={()=>console.log("pre-orders - You've! got clicked! 3")}>*/}
          {/*    >pre-orders*/}
          {/*</button>*/}
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
          {/*<article>*/}
          {/*    <span>Best seller</span>*/}
          {/*    <img src={tasA} alt={"bag"} />*/}
          {/*    <p>The handy bag</p>*/}
          {/*    <h4>€400</h4>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*    <span>Best seller</span>*/}
          {/*    <img src={tasB} alt={"bag"}/>*/}
          {/*    <p>The stylish bag</p>*/}
          {/*    <h4>€250</h4>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*    <span>New collection</span>*/}
          {/*    <img src={tasC} alt={"bag"}/>*/}
          {/*    <p>The simple bag</p>*/}
          {/*    <h4>€300</h4>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*    <span>New collectiom</span>*/}
          {/*    <img src={tasD} alt={"bag"}/>*/}
          {/*    <p>The trendy bag</p>*/}
          {/*    <h4>€150</h4>*/}
          {/*</article>*/}
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
          {/*<section>*/}
          {/*    <img src={brand} alt={"brand-content"}/>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <h2>The Brand</h2>*/}
          {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*        Aut ea ex illum nam odit quae repudiandae soluta tempore totam unde!*/}
          {/*        Aut dignissimos exercitationem ipsum, mollitia nostrum perferendis quia quibusdam recusandae.*/}
          {/*    </p>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <h2>Our Story</h2>*/}
          {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
          {/*        Aut ea ex illum nam odit quae repudiandae soluta tempore totam unde!*/}
          {/*        Aut dignissimos exercitationem ipsum, mollitia nostrum perferendis quia quibusdam recusandae.*/}
          {/*    </p>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <img src={story} alt={"story-content"}/>*/}
          {/*</section>*/}
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
            <Button
                disabled={false}
                item="Click me"
            />
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
            <Button
                disabled={false}
                item="don't click me"
            />
          </Tile>

        </footer>
      </Fragment>
  );
}

export default App;



