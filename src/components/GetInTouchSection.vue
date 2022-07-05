<template>
    <div>
        <div class="background-get-in-touch-section">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <span data-aos="fade-up" data-aos-delay="100" class="get-in-touch-intro">Send a message</span>
                        <h3 data-aos="fade-up" data-aos-delay="200">Get in <span class="title-stylized">Touch</span></h3>
                        <span data-aos="fade-up" data-aos-delay="400" class="text-get-in-touch">We will respond to your message as soon as possible.</span>

                        <div class="row row-cols-2 g-3 input-two-cols-container">
                            <div class="col">
                                <div class="form-floating" data-aos="fade-up" data-aos-delay="850">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Name">
                                    <label for="floatingInput">Name</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating" data-aos="fade-up" data-aos-delay="850">
                                    <input type="email" class="form-control" id="floatingEmail" placeholder="Email">
                                    <label for="floatingPassword">Email</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating" data-aos="fade-up" data-aos-delay="600">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Phone">
                                    <label for="floatingInput">Phone</label>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form" data-aos="fade-up" data-aos-delay="600">
                                    <select class="form-select p-3" id="floatingSelect"
                                        aria-label="Floating label select">
                                        <option selected>More info</option>
                                        <option value="Main phone">Main phone </option>
                                        <option value="Cellular phone">Cellular phone</option>
                                        <option value="Landline phone">Landline phone</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div  class="form pt-3" data-aos="fade-up" data-aos-delay="400">
                            <textarea class="form-control" placeholder="Message" id="floatingTextarea2"
                                style="height: 150px"></textarea>

                        </div>
                        <button  data-aos="fade-up" data-aos-delay="400" class="btn btn-primary">Send</button>
                    </div>
                    <div  data-aos="fade-left" data-aos-delay="100" class="col right-part-get-in-touch">
                        <h6>Example Inc.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Praesent diam lacus, dapibus sed imperdiet consecutetur.</p>
                        <ContactsComponent class="contact-info" v-for="contact in contacts" :key="contact.name" :contact="contact" />
                        <button class="btn btn-outline-primary">View Map</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactsComponent from './_contacts-component.vue';

export default {
    name: 'GetInTouchSection',
    components: {
        ContactsComponent
    },
    data() {
        return {
            contacts: [
                {
                    name: 'phone',
                    value: '+1 (305) 1234-5678',
                    icon: 'fa-solid fa-phone'
                },
                {
                    name: 'email',
                    value: 'hello@example.com',
                    icon: 'fa-solid fa-envelope'
                },
                {
                    name: 'address',
                    value: 'Main Avenue, 987',
                    icon: 'fa-solid fa-location-dot'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/get-in-touch-section';
</style>