import Image from 'next/image';

const BoraCodar17 = () => {
  return (
    <div className="container flex w-screen h-screen justify-center items-center">
      <div className="bg-white px-14 py-6 rounded-[40px] ">
        <div className="h-4 w-40 mx-auto bg-violet-100 rounded-full mb-24" />
        <h1 className="font-bold text-4xl">
          Encontre <span className="text-violet-800">Boris</span> no local de
          partida
        </h1>
        <span className="text-lg font-medium">
          Chega em 3 minutos (800 metros)
        </span>
        <div className="flex items-center mt-24">
          <div className="relative flex-1 flex items-center gap-4">
            <div className="relative z-10">
              <Image
                src={'/desafio-19/avatar.png'}
                width={137}
                height={137}
                alt=""
              />
              <div className="absolute -bottom-8 left-1/2 right-1/2 -translate-x-1/2 w-fit text-center">
                <div className="bg-gray-600 rounded-full flex px-5 py-2 gap-2 items-center w-[100px] h-[31px]">
                  <Image
                    src={'/desafio-19/star.svg'}
                    width={15}
                    height={15}
                    alt=""
                  />
                  <span className="font-semibold text-lg text-gray-100">
                    5.0
                  </span>
                </div>
                <span className="font-bold text-lg">Boris C.</span>
              </div>
            </div>
            <Image
              src={'/desafio-19/car.png'}
              width={286}
              height={111}
              alt=""
              className="absolute left-24"
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl">BCD0D19</h1>
            <p className="font-medium text-base">Handa Civic Roxo</p>
          </div>
        </div>

        <div className="mt-24 flex gap-8">
          <input
            type="text"
            placeholder="Enviar mensagem para Boris..."
            className="flex-1 rounded-3xl h-16 font-medium text-2xl bg-violet-100 py-4 px-7"
          />
          <div className="flex gap-10">
            <Image src={'/desafio-19/tel.svg'} width={48} height={48} alt="" />
            <Image
              src={'/desafio-19/shield.svg'}
              width={48}
              height={48}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoraCodar17;
