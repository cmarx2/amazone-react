class Api::DepartmentsController < ApplicationController
  
  def index
    render json: Department.all
  end
  
  def create
    department = Department.new(department_params_)
    if department.save
      render json: department
    else
      render json: { errors: department.errors }, status: :unprocessable_entity
  end

  def update
    department = Department.find(params[:id])
    if department.update(department_params)
      render json: department
    else
      render json: { errors: department.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end
 
  def destroy
    Department.find(params[:id]).destroy
    render json: { message: 'department deleted'}
  end 
  
  private

  def department_params
    params.require(:department).permit(:title, :id)
  end
  
end
end
