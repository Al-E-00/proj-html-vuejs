<template>
    <div>
        <div class="background-newsletter-section">
            <div class="container">
                <div class="row">
                    <div class="col text-style">
                        <span data-aos="fade-up" data-aos-delay="200" class="newsletter-intro">
                            Newsletter
                        </span>
                        <h6 data-aos="fade-up" data-aos-delay="250">
                            <span  data-aos="fade-up" data-aos-delay="290" class="title-stylized">Know</span> First
                        </h6>
                        <p  data-aos="fade-up" data-aos-delay="500">Follow closely and receive content about our company and the news of the current market.</p>
                    </div>
                    <div class="col input-style">
                        <div data-aos="fade-up" data-aos-delay="200" class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Name">
                            <label for="floatingInput">Name</label>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="250" class="form-floating">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="Email">
                            <label for="floatingPassword">Email</label>
                        </div>
                        <button data-aos="fade-up" data-aos-delay="400" class="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/newsletter-section';
</style>