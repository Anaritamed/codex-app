import { v4 as uuidv4 } from 'uuid'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Application from '@ioc:Adonis/Core/Application'

/**
 * Responsável por exibir, armazenar, atualizar e remover usuários 
 */
export default class UsersController {
  /**
   * Valida os "critérios" da imagem que será adicionada
   */
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  /**
   * Exibe todos os usuários
   * 
   * @param param0 
   * @returns todos os usuários
   */
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  /**
   * Armazena os dados do usuário no banco de dados
   * 
   * @param param0 image, nome, sobrenome, genero, idade, email, password
   * @returns o usuário salvo
   */
  public async store({ request }: HttpContextContract) {
    const body = request.only(['image', 'nome', 'sobrenome', 'genero', 'idade', 'email', 'password'])
    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName
      })

      body.image = imageName
    }

    const user = await User.create({
      image: body.image,
      nome: body.nome,
      sobrenome: body.sobrenome,
      genero: body.genero,
      idade: body.idade,
      email: body.email,
      password: body.password
    })
    return user
  }

  /**
   * Exibe os dados de um usuário específico
   * 
   * @param param0 id
   * @returns o usuário solicitado
   */
  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    return user
  }

  /**
   * Atualiza os dados de um usuário no banco de dados
   * 
   * @param param0 id, image, nome, genero, idade, email, password
   * @returns o usuário já atualizado
   */
  public async update({ request }: HttpContextContract) {
    const userId = request.param('id')
    const body = request.only(['image', 'nome', 'sobrenome', 'genero', 'idade', 'email', 'password'])
    const user = await User.findOrFail(userId)

    //Verifica se a imagem já está armazenada ou se não existe no banco de dados
    if (user.image != body.image || !user.image) {
      const image = request.file('image', this.validationOptions)
      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`
  
        await image.move(Application.tmpPath('uploads'), {
          name: imageName
        })
  
        user.image = imageName
      }
    }
    await user.merge(body).save()
    return user
  }

  /**
   * Remove um usuário específico do banco de dados
   * 
   * @param param0 id
   * @returns true
   */
  public async destroy({ request }: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    await user.delete()
    return true
  }
}
