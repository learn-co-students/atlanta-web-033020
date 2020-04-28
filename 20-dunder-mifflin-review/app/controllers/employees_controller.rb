class EmployeesController < ApplicationController

    def index
        @employees = Employee.all
    end

    def show
        @employee = find_employee
    end

    def new
        @employee = Employee.new
    end

    def create
        @employee = Employee.new(employee_params)
        if @employee.save
            redirect_to employee_path(@employee)
        else
            render :new
        end
    end

    def edit
        @employee = find_employee
    end

    def update
        @employee = find_employee
        if @employee.update(employee_params)
            redirect_to employee_path(@employee)
        else
            render :edit
        end
    end

    def find_employee
        employee = Employee.find_by(id: params[:id])
        if !employee
            redirect_to employees_path
        else
            return employee
        end
    end

    private

    def employee_params
        params.require(:employee).permit(:first_name, :last_name, :alias, :office, :img_url, :dog_id, :title)
    end

end
