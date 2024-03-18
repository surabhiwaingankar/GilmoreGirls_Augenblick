from langchain.llms import OpenAI
from langchain_community.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationSummaryMemory
import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPEN_AI_API_KEY")

model = OpenAI(model_name="gpt-3.5-turbo-instruct")

conversation = ConversationChain(
    llm=model,
    verbose=True,
    memory=ConversationSummaryMemory(typed_summary=True, typed_conversation=True, type="conversation", llm=model),
)

conversation("You are a customer service AI chatbot for a laptop company and you have to take into consideration people's sentiments and emotions while replying.")

def get_answer(our_text):
    ans = conversation.predict(input=our_text)
    return ans

def add_message(our_text):
    conversation(f"AI replied with {our_text}")

# ans = get_answer("My laptop has some issues. Can you help me?")
# print(ans)
# add_message(ans)
# ans = get_answer("No i haven't troubleshooted yet")
# print(ans)