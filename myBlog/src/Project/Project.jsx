import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import { GoLinkExternal } from "react-icons/go";

export default function Project() {
  return (
    <div>
      <h1> Projelerim</h1>
      <ListGroup className="mt-4">
        <ListGroupItem>
          <ListGroupItemHeading>Batman Tv Showları </ListGroupItemHeading>
          <ListGroupItemText>
            Tvmaze API'ı kullanılarak ana sayfada Batman tv şovları listelenen
            ve tıklandığında bu tv şovlarının detay sayfasına inilen bir
            uygulama. Detayda film afişi ve açıklamaları yer alıyor. Geçişlerde
            sayfa yeniden yüklenmiyor, single page app.Bu uygulamayı deploy
            ettim. Projeler kısmından ulaşabilirsiniz.Ayrıca Github linkinide
            bırakıyorum :
            <a href="https://github.com/gacalyus/Batman-Tv-ovlar-">
              Github Link <GoLinkExternal />
            </a>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Redux </ListGroupItemHeading>
          <ListGroupItemText>
            Bu ise Redux kullandığım projem. Halen geliştirmeye devam ediyorum.
            Material UI kullanarak geliştirmelerini yaptım. Router altyapısına
            sahip action ve reducer mevcuttur. Daha detaylı incelemek isterseniz
            Github linkinide bırakıyorum :
            <a href="https://github.com/gacalyus/gacal-redux">
              Github Link <GoLinkExternal />
            </a>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
