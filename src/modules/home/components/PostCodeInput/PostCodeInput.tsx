import Input from "@modules/common/components/input"
import { FieldValues, useForm } from "react-hook-form"

interface PostCodeInput extends FieldValues {
  postcode: string
}
const PostCodeInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCodeInput>()

  const onSubmit = handleSubmit(async (location) => {
    console.log(location.postcode)
  })

  return (
    <div className="z-20 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl">
      <form onSubmit={onSubmit}>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Enter your postcode below to see what delights we have in store for
          you.
        </p>
        <Input
          label="Postcode"
          {...register("postcode", { required: "Postcode is required" })}
          autoComplete="postcode"
          errors={errors}
        />
        <button className="underline" type="submit">
          Show me what you got!
        </button>
      </form>
    </div>
  )
}

export default PostCodeInput
