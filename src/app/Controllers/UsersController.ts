import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  // public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const body = request.only(['nome', 'genero', 'idade', 'email', 'password'])

    const user = await User.create({
      nome: body.nome,
      genero: body.genero,
      idade: body.idade,
      email: body.email,
      password: body.password
    })
    return user
  }

  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    return user
  }

  // public async edit({}: HttpContextContract) {}

  public async update({ request }: HttpContextContract) {
    const userId = request.param('id')
    const body = request.only(['nome', 'genero', 'idade', 'email', 'password'])
    const user = await User.findOrFail(userId)
    
    await user.merge(body).save()

    return user  
  }

  public async destroy({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    await user.delete()  
    return true
  }
}
