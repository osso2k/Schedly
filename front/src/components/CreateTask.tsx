import { GrFormAdd } from "react-icons/gr";

const createTask = () => {
  return (
    <div className="mt-10 w-[50%] mx-auto h-[20%] bg-amber-50 rounded-2xl">
      <div className="grid grid-rows-2 gap-2">
        <div className="order-1 flex mt-4 ml-5">
            <GrFormAdd className="text-5xl text-blue-200" />
            <h2 className="my-auto text-xl text-zinc-900">Add New Task</h2>
        </div>
        <div className="order-2">

        </div>

      </div>
    </div>
  )
}

export default createTask
