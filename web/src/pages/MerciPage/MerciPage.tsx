import { Metadata } from '@redwoodjs/web'

const MerciPage = () => {
  return (
    <>
      <Metadata title="Merci" description="Merci page" />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            Merci !
          </h1>
          <p className="text-gray-700">
            Votre chanson a bien été enregistrée.
          </p>
        </div>
      </div>
    </>
  )
}

export default MerciPage
