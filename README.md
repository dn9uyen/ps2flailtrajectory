# Planetside 2 Flail Trajectory Calculator

https://dn9uyen.github.io/ps2flailtrajectory/

Calculator for the trajectory of the flail in a game called planetside 2. The idea for this calculator is based on the fact that the flail follows projectile motion.

Since the flail darts register when shot at an aircraft, it's possible to shoot into protected areas by choosing a point on the trajectory that is not within the protected sphere.

![flail](https://user-images.githubusercontent.com/26189199/148698658-47016547-4579-4ee8-a0ef-e962cf596528.png)

The flail dart can be a max of 600m away from the flail itself, but it's possible to shoot out to even 800m (furthest tested) by exploiting the mechanics of the flail. 

How I think it works: 

Projectiles can theoretically have 2 trajectories to a point (a flat, almost straight line to the point or an arcing parabola). If firing at a point in the air like an aircraft, it's obvious that a shot going in a flat trajectory will land further than a shot on a high arcing trajectory. The game usually chooses the arcing trajectory, but it sometimes chooses the flat one. I don't know what causes this, but it tends to happen near the max range of the flail dart.
