"use client"

import React, { FC, useState } from "react";
import Image from 'next/image'

import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

interface Item {
  src: string;
  altText: string;
  caption: string;
}

const items: Item[] = [
  {
    src: require("public/about.webp"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("public/books-collection.webp"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("public/cafe-book.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
];

const SectionCarousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="mx-auto flex max-w-80 flex-col gap-y-4 px-4 py-6 md:flex-row-reverse md:gap-x-4 md:px-8 lg:py-14" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto " md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <Image src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
};

export default SectionCarousel;