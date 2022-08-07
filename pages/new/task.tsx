import type { NextPage } from "next";
import { Formik } from "formik";

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-evenly'>
      <h1 className='text-3xl font-bold'>Create New Task</h1>
      <Formik
        initialValues={{
          name: "",
          startDate: "",
          endDate: "",
          daysOfTheWeek: [],
          timeOfTheDay: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 400);
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
            className='flex flex-col items-start justify-start space-y-8'
            onSubmit={(event) => handleSubmit(event)}>
            <div>
              <label
                htmlFor='text'
                className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                name for task
              </label>
              <input
                name='name'
                type='text'
                id='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className='bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='purpose of the task could be a good name.'
                required
              />
            </div>
            <div className='flex flex-row items-center space-x-4'>
              <div>
                <label
                  htmlFor='startDate'
                  className='block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300 uppercase'>
                  start date
                </label>
                <input
                  name='startDate'
                  type='date'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.startDate}
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
                  name='endDate'
                  type='date'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.endDate}
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                      name='daysOfTheWeek'
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
                name='timeOfTheDay'
                type='time'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.timeOfTheDay}
                className='bg-stone-50 border border-stone-300 text-stone-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Select time'
              />
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
