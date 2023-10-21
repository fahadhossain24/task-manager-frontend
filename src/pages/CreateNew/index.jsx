import { useForm } from "react-hook-form";
import UserInput from "../../components/UserInput";
import Button from "../../components/Button";

const CreateNew = () => {
    const { handleSubmit, register, formState, } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <div className="w-[80%] mx-auto h-[100vh]">

            <h3 className="text-2xl  font-bold text-blue-900 text-center py-4">Create new task</h3>

            <div className="lg:w-[70%] sm:w-[60%] sm:ml-48 lg:mx-auto bg-blue-200 p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex sm:flex-col lg:flex-row justify-evenly">
                        <div className="lg:w-1/2 sm:w-full ml-4">
                            <UserInput
                                label="Task Name"
                                name="taskName"
                                inputType="text"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                            />
                            <UserInput
                                label="Task Deadline"
                                name="deadline"
                                inputType="Date"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                            />
                            <div className="mt-2">
                                <label
                                    className={`font-medium text-sm text-[#444]`}>
                                    Task Description
                                </label> <br />
                                <textarea
                                    name="description"
                                    cols="37"
                                    rows="5"
                                    className='w-[90%] mx-auto p-2 border-[1px] border-black rounded-md mt-1 bg-blue-100'
                                    {...register('description')}
                                ></textarea>
                            </div>

                        </div>
                        <div className="lg:w-1/2 sm:w-full ml-2">
                            <label>Task Priority</label>
                            <div className="flex gap-4 ">
                                <UserInput
                                    label="Low"
                                    name="priority"
                                    inputType="radio"
                                    value="low"
                                    register={register}
                                    formState={formState}
                                    customInputStyle='w-[27px]'
                                />
                                <UserInput
                                    label="Medium"
                                    name="priority"
                                    inputType="radio"
                                    value="medium"
                                    register={register}
                                    formState={formState}
                                    customInputStyle='w-[23px] ml-3'

                                />
                                <UserInput
                                    label="High"
                                    name="priority"
                                    inputType="radio"
                                    value="high"
                                    register={register}
                                    formState={formState}
                                    customInputStyle='w-[23px]'

                                />
                            </div>

                            <label>Task Reminder</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100 mb-2'
                                {...register('taskReminder')}
                            >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select><br />

                            <label>Task Visibility</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100 mb-2'
                                {...register('taskVisibility')}
                            >
                                <option value="true">Only Me</option>
                                <option value="false">Team Member</option>
                            </select><br />

                            <label>Task Recurring</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100'
                                {...register('taskRecurring')}
                            >
                                <option value="true">Deaily</option>
                                <option value="false">Weekly</option>
                                <option value="false">Monthly</option>
                                <option value="false">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-3">
                        <Button buttonText='Create' type='submit' customStyle='px-3'/>
                        {/* <button type="submit" className="bg-blue-400 px-3 py-1 rounded-md text-lg"></button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNew;