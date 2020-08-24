# Tapka Pedigree

**[Showcase here](https://tapka.github.io/pedigree/)**

## Disclaimer

I developed platform [Tapka.cz](https://tapka.cz) to help dog breeders create awesome web presentations.

It's a Content Management System specially tailored for breeders' needs.

Tapka offers freemium pricing. You get almost everything for free - like [Pod Bezdezem](https://tapka.cz/en/chs-psu-pod-bezdezem).

Do you want your website to look more professional? You can use Tapka with custom domain - like [Budweis Jack](http://www.budweisjack.cz/en).

Or you can take it to the next level and we'll create a custom design for you - like [Anachsunamun](http://www.anachsunamun.cz/en/jack-russell-terrier/females).

## Motivation for this app

I took on the challenge of improving dog pedigree to be able to not only see parents but also navigate downwards towards children. 

Tapka offers [default out of the box pedigree](http://www.budweisjack.cz/en/jack-russell-terrier/mercury-fredie-bohemia-point/pedigree).
 
And this is **[new enhanced version](https://tapka.github.io/pedigree/animal/55b9c8fe975a001022d08924)** served from this repo.

## Behind the scenes

[Pedigree component](https://github.com/tapka/pedigree/blob/master/src/components/pedigree.js#L111) renders itself and its parents recursively until it hits ANCESTOR_LEVELS limitation.

Application uses React, Redux and Travis CI to deploy to Github Pages.

REST endpoints were implemented specially for this application. 


## TODO

- add animations
- improve UI
- add panel with history - listing visited dogs
- add tests

---

Cloned from

https://github.com/StephenGrider/ReduxSimpleStarter

(just because I took his [Udemy course](https://www.udemy.com/react-redux/))
