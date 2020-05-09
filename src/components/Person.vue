<template>
    <div>
        <h2 :class="[gender === 'Male' ? 'blue' : 'pink']">
            {{ gender }}
        </h2>
        <div class="mb-2">
            <b-avatar size="4em"
                v-for="(pet, index) in reduce" :key="index">
                {{ pet.name }}
            </b-avatar>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        gender: String,
        people: Array
    },    
    computed: {
        reduce() {
            let pets = [], pet = {}
            let filterByGender = _.filter(this.people, (e) => e.gender === this.gender)

            _(filterByGender).forEach(function (person) {
                let currentPets = person.pets;

                if(currentPets !== null && currentPets.length > 0) {
                    _(currentPets).forEach(function (p) {
                        if(p.type === "Cat") {
                            pet.name = p.name;
                            pets.push(pet);
                            pet = {};
                        } 
                    })
                }
            })        
            return _.sortBy(pets, ['name'])         
        }
    }
}
</script>

<style scope>
.blue {
    color: blue;
}
.pink {
    color: pink;
}
</style>