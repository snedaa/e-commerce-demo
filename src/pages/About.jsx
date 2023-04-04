import React from "react";

export default function About() {
  return (
    <div className="about">
      <div>
        <img
          className="relative"
          src="https://themewagon.github.io/cozastore/images/bg-01.jpg"
          alt=""
        />
        <h3 className="absolute top-[20%] left-[45%] uppercase font-extrabold text-3xl text-white">
          About
        </h3>
      </div>

      <div className="flex items-center justify-around mt-20">
        <div className="w-[60%] ml-5 mr-5">
          <h3 className="uppercase font-bold mb-9 text-3xl">Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. Morbi sed
            odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas varius egestas diam, eu sodales metus
            scelerisque congue. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas gravida
            justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
            vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
            condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a
            tempor elit.
          </p>
          <p className="mt-12">
            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu
            sodales lectus sagittis. Etiam pellentesque, magna vel dictum
            rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
            et maximus enim ligula ac ligula.
          </p>
        </div>

        <div className="w-[200px] h-[215px] relative border-[3px]"></div>
        <img
          className="w-[217px] absolute right-11 bottom-14"
          src="https://themewagon.github.io/cozastore/images/about-01.jpg"
          alt=""
        />
      </div>

      <div className="flex items-center justify-around mt-20">
        <div className="w-[200px] h-[220px] relative border-[3px]"></div>
        <img
          className="w-[217px] absolute left-11 mb-6"
          src="https://themewagon.github.io/cozastore/images/about-02.jpg"
          alt=""
        />
        <div className="w-[60%] ml-5 mr-5">
          <h3 className="uppercase font-bold mb-9 text-3xl">Our Mission</h3>
          <p>
            Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus
            dignissim risus, sed consectetur erat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam maximus mauris sit amet odio convallis, in pharetra magna
            gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae
            viverra odio. Pellentesque ac velit egestas, luctus arcu non,
            laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor
            ante. Ut mauris ligula, volutpat in sodales in, porta non odio.
            Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla
            lobortis. Proin at gravida ante. Mauris auctor purus at lacus
            maximus euismod. Pellentesque vulputate massa ut nisl hendrerit,
            eget elementum libero iaculis.
          </p>
        </div>
      </div>
    </div>
  );
}
