<template>
    <div class="budgetitem">
        <p>
            {{item.title}}
            <span style="color:green">${{item.value}} </span>
            <span id = "cat">{{item.category}}</span>
            <button 
                @click="$emit('del-item', item.id)" 
                @mouseover="hover"
                @mouseleave="leave" 
                class = "delete"
                
            >
                <span id="del">{{content}}</span>
            </button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'BudgetItem',
    props: [
        'item'
    ], 
    data(){
        return{
            content: "X", 
        }
    }, 
    methods: {
        hover(){
            this.content = "Delete Item"
        }, 
        leave(){
            this.content = "X"
        }
    }
}
</script>

<style scoped>
    .budgetitem{
        color: black;
    }
    .income{
        color: green;
    }

    .delete {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50px;
        cursor: pointer;
    }

    .delete:hover{
        padding: 15px 12px;
    }

    #del{
        text-transform: uppercase;
        font-weight: bold;
    }

    #cat{
        color: blue;
    }
</style>