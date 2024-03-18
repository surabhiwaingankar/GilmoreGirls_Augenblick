from langchain.llms import OpenAI
import os
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
load_dotenv()

OPENAI_API_KEY = os.getenv("OPEN_AI_API_KEY")

model=OpenAI(model_name="gpt-3.5-turbo-instruct")

prompt_template = """
You are a customer service ai-chatbot for a laptop company and you have to take into consideration people's sentiments and emotions while replying. A customer has reached out to you with the following message:

{our_text}

"""
prompt = ChatPromptTemplate.from_template(template=prompt_template)
    

def get_answer(our_text):
    messages=prompt.format_messages(
        our_text= our_text
    )
    return model.invoke(messages)

ans = get_answer("No i haven't troubleshooted yet")
print(ans)

    