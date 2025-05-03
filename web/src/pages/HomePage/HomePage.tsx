import type {
  CreateUserMutation,
  CreateUserInput,
  CreateUserMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserForm from 'src/components/User/UserForm'
import { Metadata } from '@redwoodjs/web'

const CREATE_USER_MUTATION: TypedDocumentNode<
  CreateUserMutation,
  CreateUserMutationVariables
> = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Utilisateur créé avec succès')
      navigate(routes.merci())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateUserInput) => {
    createUser({ variables: { input } })
  }

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6">
          <header className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Vous voulez chanter ?</h2>
            <p className="text-sm text-gray-500">Remplissez le formulaire ci-dessous</p>
          </header>
          <div>
            <UserForm onSave={onSave} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
