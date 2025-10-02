export default function Posts() {
  return (
    <div className="flex-1 h-screen bg-main-color-zinc flex flex-col items-center">
      <form action="" className="w-full flex flex-col gap-10 pt-20">
        <div className="flex flex-col items-center gap-5 justify-center md:gap-18 md:flex-row">
          <input
            type="text"
            name="userId"
            id="userId"
            className="bg-white rounded-md w-80 h-12 outline-main-orange-color pl-6"
            placeholder="User ID"
          />
          <input
            type="text"
            name="title"
            id="title"
            className="bg-white rounded-md w-80 h-12 outline-main-orange-color pl-6"
            placeholder="Title"
          />
          <input
            type="text"
            name="body"
            id="body"
            className="bg-white rounded-md w-80 h-12 outline-main-orange-color pl-6"
            placeholder="Body"
          />
        </div>
        <button
          type="submit"
          className="h-12 w-60 bg-main-orange-color text-white rounded-md mx-auto hover:bg-orange-600 transition-colors hover:cursor-pointer"
        >
          Postar
        </button>
      </form>

      <div className="w-full max-w-10/12 md:max-w-[1104px] mt-10 bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Conteúdo do post em layout vertical */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">
              ID Usuario:
            </span>
            <h3 className="font-semibold text-gray-800">ID</h3>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Título do Post
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Corpo do post aqui. Este é o conteúdo principal que pode ser bem
              mais longo e terá espaço adequado para ser lido tanto em desktop
              quanto em dispositivos móveis.
            </p>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <button className=" top-4 right-4 p-2 text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer rounded-md transition-colors">
              Deletar Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
