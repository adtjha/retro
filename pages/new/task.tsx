import type { NextPage } from "next";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../utils/supabaseClient";

const Home: NextPage = () => {
  return (
    <div className='w-full h-full my-8 flex flex-col items-center justify-evenly'>
      <h1 className='text-3xl font-bold'>Create New Task</h1>
      <Formik
        initialValues={{
          name: "",
          start_date: "",
          end_date: "",
          days_of_the_week: [],
          time_of_the_day: "",
          id: uuidv4(),
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          supabase
            .from("tasks")
            .insert([{ ...values }])
            .then(({ data, error }) => {
              if (error) {
                console.log(error);
              } else {
                console.log(data);
              }
              setSubmitting(false);
            });
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className='flex flex-col items-start justify-start space-y-16'
            onSubmit={(event) => handleSubmit(event)}>
            <div className='w-full px-8 space-y-8'>
              <h3 className='-mx-8 text-5xl font-extrabold text-stone-200'>
                what
              </h3>
              <div className='w-full flex flex-col items-start justify-start space-y-8'>
                <div className='w-full flex flex-row items-center space-x-4'>
                  <div className='w-1/2'>
                    <label
                      htmlFor='text'
                      className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                      name for task
                    </label>
                    <input
                      name='name'
                      type='text'
                      id='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className='bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='purpose of the task could be a good name.'
                      required
                    />
                  </div>
                  <div className='w-1/2'>
                    <label
                      htmlFor='text'
                      className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                      task id
                    </label>
                    <input
                      name='id'
                      type='text'
                      id='id'
                      disabled
                      value={values.id}
                      className='bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='text'
                    className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                    description for task
                  </label>
                  <textarea
                    name='description'
                    id='description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    rows={3}
                    className='bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='purpose of the task could be a good name.'
                    required
                  />
                </div>
              </div>
            </div>
            <div className='w-full px-8 space-y-8'>
              <h3 className='-mx-8 text-5xl font-extrabold text-stone-200'>
                when
              </h3>
              <div className='flex flex-col items-start justify-start space-y-8'>
                <div className='flex flex-row items-center space-x-4'>
                  <div>
                    <label
                      htmlFor='startDate'
                      className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                      start date
                    </label>
                    <input
                      name='start_date'
                      type='date'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.start_date}
                      className='bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Select date'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='endDate'
                      className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                      end date
                    </label>
                    <input
                      name='end_date'
                      type='date'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.end_date}
                      className='bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Select date'
                    />
                  </div>
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                    days of the week
                  </label>
                  <div className='flex flex-row flex-wrap items-center space-x-4'>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='monday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='monday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='monday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        monday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='tuesday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='tuesday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='tuesday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        tuesday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='wednesday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='wednesday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='wednesday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        wednesday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='thursday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='thursday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='thursday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        thursday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='friday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='friday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='friday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        friday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='saturday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='saturday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='saturday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        saturday
                      </label>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          name='days_of_the_week'
                          id='sunday'
                          type='checkbox'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value='sunday'
                          className='w-4 h-4 bg-stone-50 rounded border border-stone-300 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800'
                        />
                      </div>
                      <label
                        htmlFor='sunday'
                        className='ml-2 text-sm font-medium text-stone-900 dark:text-stone-300'>
                        sunday
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='timeOfTheDay'
                    className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                    time of the day
                  </label>
                  <input
                    name='time_of_the_day'
                    type='time'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time_of_the_day}
                    className='bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Select time'
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
