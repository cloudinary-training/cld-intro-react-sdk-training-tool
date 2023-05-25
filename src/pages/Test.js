function Test() {
  cldVideo
    .resize(fill().height(250).width(250).gravity("auto"))
    .overlay(
      source(
        image("cld-white-logo").transformation(
          new Transformation().resize(scale().width(50))
        )
      ).position(
        new Position().gravity(compass("north_east")).offsetX(20).offsetY(20)
      )
    );
  return (
    <div className={"mr-2"}>
      return (
      <div>
        <AdvancedImage alt="Sample Image" cldImg={cldImage} />
      </div>
      ) }
    </div>
  );
}

export default About;
