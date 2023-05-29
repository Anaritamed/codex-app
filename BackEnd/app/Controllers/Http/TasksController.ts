import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

/**
 * Responsável por exibir, armazenar, atualizar e remover tarefas 
 */
export default class TasksController {
  /**
   * Exibe todas as tarefas
   * 
   * @param param0 
   * @returns todas as tarefas
   */
  public async index({}: HttpContextContract) {
    const task = await Task.all()
    return task
  }

  /**
   * Armazena a tarefa no banco de dados
   * 
   * @param param0 tarefa
   * @returns a tarefa salva
   */
  public async store({ request }: HttpContextContract) {
    const body = request.only(['tarefa'])

    const task = await Task.create({
      tarefa: body.tarefa
    })
    return task
  }

  /**
   * Atualiza a tarefa no banco de dados
   * 
   * @param param0 id, tarefa
   * @returns a tarefa já atualizada
   */
  public async update({ request }: HttpContextContract) {
    const taskId = request.param('id')
    const body = request.only(['tarefa'])
    const task = await Task.findOrFail(taskId)
    await task.merge(body).save()
    return task
  }

  /**
   * Remove uma tarefa específica do banco de dados
   * 
   * @param param0 id
   * @returns true
   */
  public async destroy({ request }: HttpContextContract) {
    const taskId = request.param('id')
    const task = await Task.findOrFail(taskId)
    await task.delete()
    return true
  }
}
