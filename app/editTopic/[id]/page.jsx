import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  console.log(id);
  try {
    const res = await fetch(`https://vwzpbbg5-3000.inc1.devtunnels.ms/api/topics/${id}`, { 
      cache: "no-store",
    });
    if (res.ok){
      console.log("wonderful");
    }
    if (!res.ok) {
      console.log("not wonderful");
      throw new Error("Absouloiutley cooked and non bombastic");
    }
    
    const data = await res.json();
    console.log("Fetched topic data:", data);
    return data;
  } catch (error) {
    console.log("dontworry na", );
    return undefined;
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const data = await getTopicById(id);
  
  if (!data || !data.topic) {
    console.error("Topic data is undefined");
    // You might want to handle this case more gracefully, like showing an error message to the user.
    return <div>Error fetching topic data.</div>;
  }

  const { topic } = data;
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
