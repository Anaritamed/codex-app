import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  //lista
  public async index({}: HttpContextContract) {
    const task = await Task.all()
    return task
  }

  //cria 
  public async create({}: HttpContextContract) {}

  //armazena
  public async store({}: HttpContextContract) {}

  // //exibe 1
  // public async show({}: HttpContextContract) {}

  // //edita
  // public async edit({}: HttpContextContract) {}

  //atualiza
  public async update({}: HttpContextContract) {}

  //remove
  public async destroy({}: HttpContextContract) {}
}
