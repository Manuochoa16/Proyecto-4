import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página No Encontrada</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, pero la página que estás buscando no existe.
        </p>
        <Link href="/">
          <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            Volver al Inicio
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <img
          src="techpulseLogo.png"
          alt="Ilustración de error 404"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
}
